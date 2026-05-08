import type { ResearchItem } from '@/types'

export const researchItems: ResearchItem[] = [
  {
    id: 'rag-bengali',
    year: '2024',
    title: 'Efficient RAG Architectures for Low-Resource Languages: A Bengali Case Study',
    venue: 'arXiv preprint · Under review at EMNLP 2025',
    abstract:
      'We propose novel retrieval-augmented generation pipeline adaptations for morphologically rich, low-resource languages. Our approach achieves 14.2% improvement in answer faithfulness while reducing hallucinations by 31% compared to baseline RAG on Bengali question-answering benchmarks.',
    links: [
      { label: '⤓ Paper', href: '#' },
      { label: '⌿ Code', href: '#' },
      { label: '◈ Demo', href: '#' },
    ],
  },
  {
    id: 'quantization-distillation',
    year: '2024',
    title: 'Quantization-Aware Knowledge Distillation for Edge LLM Inference',
    venue: 'Workshop on Efficient NLP · ACL 2024',
    abstract:
      'A training procedure that combines structured pruning, QAT, and task-specific distillation to compress 7B parameter models to sub-1B while retaining 93% benchmark performance on commonsense reasoning tasks.',
    links: [
      { label: '⤓ Paper', href: '#' },
      { label: '⌿ Code', href: '#' },
    ],
  },
  {
    id: 'cache-invalidation',
    year: '2023',
    title: 'Adaptive Cache Invalidation Strategies in Distributed Graph Databases',
    venue: 'Undergraduate Thesis · Dept. of Computer Science',
    abstract:
      'Analysis of consistency-latency tradeoffs in distributed graph query caching. Proposes a hybrid TTL/event-driven invalidation scheme that reduces cache-miss-induced latency spikes by 67% in high-write workloads.',
    links: [
      { label: '⤓ PDF', href: '#' },
      { label: '⌿ Data', href: '#' },
    ],
  },
  {
    id: 'vector-db-benchmark',
    year: '2023',
    title: 'Benchmarking Vector Database Performance at Scale for Semantic Search Applications',
    venue: 'Technical Report · Self-published',
    abstract:
      'Systematic comparison of Pinecone, Weaviate, Milvus, and pgvector across recall, throughput, and cost dimensions at 10M–500M vector scales. Provides decision framework and cost model for production deployments.',
    links: [
      { label: '⤓ Report', href: '#' },
      { label: '⌿ Benchmark', href: '#' },
    ],
  },
]
