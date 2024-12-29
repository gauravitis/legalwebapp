import { db } from '../src/lib/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const blogPosts = [
  {
    title: 'Latest RERA Updates 2024',
    excerpt: 'Key changes and amendments in RERA regulations that property buyers and sellers should know.',
    content: `The Real Estate (Regulation and Development) Act (RERA) has undergone several significant changes in 2024. These updates aim to enhance transparency and protect the interests of homebuyers.

Key Changes:
1. Stricter compliance requirements for developers
2. Enhanced protection for homebuyers
3. New guidelines for project registration
4. Updated penalty provisions
5. Digital transformation initiatives

These changes reflect the government's commitment to regulating the real estate sector and ensuring fair practices.`,
    author: 'Adv. Ajay Kumar Singh',
    date: new Date().toISOString(),
    slug: 'rera-updates-2024',
    category: 'RERA'
  },
  {
    title: 'Understanding Property Rights',
    excerpt: 'A comprehensive guide to property rights and ownership laws in India.',
    content: `Property rights in India are governed by various laws and regulations. Understanding these rights is crucial for property owners and potential buyers.

Key Topics Covered:
1. Types of property ownership
2. Transfer of property rights
3. Inheritance laws
4. Property documentation
5. Legal remedies for property disputes

This guide provides essential information for anyone dealing with property matters in India.`,
    author: 'Adv. Ajay Kumar Singh',
    date: new Date().toISOString(),
    slug: 'understanding-property-rights',
    category: 'Property Law'
  },
  {
    title: 'Essential Legal Documents',
    excerpt: 'Important legal documents required for property transactions and their significance.',
    content: `Proper documentation is crucial in property transactions. This article discusses the essential legal documents required and their importance.

Required Documents:
1. Sale Deed
2. Title Documents
3. Property Registration
4. Tax Receipts
5. NOC Certificates

Understanding these documents helps ensure smooth property transactions and prevents future legal issues.`,
    author: 'Adv. Ajay Kumar Singh',
    date: new Date().toISOString(),
    slug: 'essential-legal-documents',
    category: 'Documentation'
  }
];

async function initializeBlogPosts() {
  try {
    for (const post of blogPosts) {
      await addDoc(collection(db, 'blog_posts'), post);
      console.log(`Added blog post: ${post.title}`);
    }
    console.log('All blog posts have been initialized');
  } catch (error) {
    console.error('Error initializing blog posts:', error);
  }
}

initializeBlogPosts();
