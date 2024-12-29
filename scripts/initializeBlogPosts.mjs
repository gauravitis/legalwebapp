import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

async function clearExistingPosts() {
  try {
    const q = query(collection(db, 'blog_posts'));
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log('Cleared existing blog posts');
  } catch (error) {
    console.error('Error clearing blog posts:', error);
  }
}

async function initializeBlogPosts() {
  try {
    // First clear existing posts
    await clearExistingPosts();

    // Then add new posts
    for (const post of blogPosts) {
      await addDoc(collection(db, 'blog_posts'), post);
      console.log(`Added blog post: ${post.title}`);
    }
    console.log('All blog posts have been initialized');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing blog posts:', error);
    process.exit(1);
  }
}

initializeBlogPosts();
