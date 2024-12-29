require('dotenv').config({ path: '.env.local' });
const { initializeApp } = require('firebase/app');
const { 
  getFirestore, 
  collection, 
  addDoc 
} = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

console.log('Initializing Firebase with config:', {
  ...firebaseConfig,
  apiKey: '***' // Hide API key in logs
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const blogPosts = [
  {
    title: "Understanding RERA: A Comprehensive Guide",
    excerpt: "Learn about the Real Estate Regulation Act and how it protects homebuyers' interests.",
    content: `The Real Estate (Regulation and Development) Act, 2016 (RERA) is a landmark legislation that aims to protect homebuyers and boost investments in the real estate sector. 

This comprehensive guide will help you understand the key aspects of RERA and how it benefits property buyers and regulates real estate projects.

Key Features of RERA:
1. Mandatory Registration
2. Escrow Account
3. Standardized Carpet Area
4. Strict Penalties
5. Transparency in Projects

Contact us for more detailed information about RERA compliance and your rights as a property buyer.`,
    author: "Adv. Rajesh Kumar",
    date: new Date().toISOString(),
    slug: "understanding-rera-comprehensive-guide",
    category: "RERA"
  },
  {
    title: "Common Property Disputes and Their Solutions",
    excerpt: "Explore the most common types of property disputes and learn about effective legal solutions.",
    content: `Property disputes are among the most common legal issues in India. This article discusses various types of property disputes and their legal remedies.

Common Types of Property Disputes:
1. Boundary Disputes
2. Title Disputes
3. Inheritance Issues
4. Tenant-Landlord Conflicts
5. Encroachment

Legal Solutions:
- Mediation
- Civil Litigation
- Alternative Dispute Resolution
- Documentation Review

Prevention is better than cure. Ensure proper documentation and legal verification before any property transaction.`,
    author: "Adv. Priya Singh",
    date: new Date(Date.now() - 86400000).toISOString(),
    slug: "common-property-disputes-solutions",
    category: "Property Law"
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "Business Owner",
    content: "Excellent service in handling my commercial property dispute. The team was professional and achieved the desired outcome.",
    rating: 5,
    date: new Date().toISOString()
  },
  {
    name: "Priya Patel",
    position: "Homeowner",
    content: "Their expertise in RERA matters helped me resolve issues with my builder. Highly recommended for property-related legal matters.",
    rating: 5,
    date: new Date(Date.now() - 86400000).toISOString()
  },
  {
    name: "Amit Kumar",
    position: "Real Estate Developer",
    content: "Great experience working with them for RERA compliance. Their knowledge and guidance were invaluable.",
    rating: 4,
    date: new Date(Date.now() - 172800000).toISOString()
  }
];

async function initializeData() {
  console.log('Starting data initialization...');
  
  try {
    console.log('Adding blog posts...');
    for (const post of blogPosts) {
      try {
        const docRef = await addDoc(collection(db, 'blog_posts'), post);
        console.log('✓ Added blog post:', post.title, 'with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding blog post:', post.title, error);
      }
    }

    console.log('\nAdding testimonials...');
    for (const testimonial of testimonials) {
      try {
        const docRef = await addDoc(collection(db, 'testimonials'), testimonial);
        console.log('✓ Added testimonial from:', testimonial.name, 'with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding testimonial:', testimonial.name, error);
      }
    }

    console.log('\n✓ Sample data initialization complete!');
  } catch (error) {
    console.error('Fatal error during initialization:', error);
    process.exit(1);
  }
}

// Install required dependency if not present
try {
  require('dotenv');
} catch (error) {
  console.log('Installing required dependency: dotenv...');
  require('child_process').execSync('npm install dotenv');
  console.log('Dependency installed successfully!\n');
}

initializeData();
