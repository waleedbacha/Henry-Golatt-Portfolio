 // ============================================================
// IN-BROWSER VECTOR STORE
// Embeddings + cosine similarity search
// Optimized for Vercel deployment (WASM backend, single-thread)
// ============================================================

import { pipeline, env } from '@xenova/transformers';

// 🔥 CRITICAL FOR VERCEL: Use WASM backend, disable native binaries
env.allowLocalModels = false;
env.backends.onnx.wasm.numThreads = 1;

let embedder = null;

/**
 * Load the embedding model (once, cached in browser)
 */
export async function loadEmbedder() {
  if (embedder) return embedder;

  embedder = await pipeline(
    'feature-extraction',
    'Xenova/all-MiniLM-L6-v2'
  );

  return embedder;
}

/**
 * Generate embedding for a single text
 */
export async function embedText(text) {
  const model = await loadEmbedder();
  const output = await model(text, {
    pooling: 'mean',
    normalize: true,
  });
  return Array.from(output.data);
}

/**
 * Calculate cosine similarity between two vectors
 */
export function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }

  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

/**
 * Build the vector store from knowledge base
 * Run once when the chat first opens
 */
export async function buildVectorStore(knowledgeBase) {
  const store = [];

  for (const item of knowledgeBase) {
    const vector = await embedText(item.content);
    store.push({
      ...item,
      vector,
    });
  }

  return store;
}

/**
 * Find the top-K most relevant chunks for a query
 */
export async function searchStore(store, query, topK = 4) {
  const queryVector = await embedText(query);

  const scored = store.map((item) => ({
    ...item,
    score: cosineSimilarity(queryVector, item.vector),
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, topK);
}