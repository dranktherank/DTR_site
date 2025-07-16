'use client';
import styles from "../backend-homepage/backend-page.module.css"


import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client using environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function GET_ALL_CONTAINERS() {
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      const { data, error } = await supabase
        .from('COLLECTIONS')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setCollections(data);
      }
      setLoading(false);
    };

    fetchCollections();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(collections)

  return (
    <div>
        <div className={styles['gap-between-horizontal-container']}>
          <p>id no.</p>
          <p>name</p>
          <p>description</p>
          <p>created_at</p>
          </div>
        {collections.map((item) => (
        <div>
          <div className={styles['gap-between-horizontal-container']}>
          <p>{item.id}</p>
          <p>{item.COLLECTION_NAME}</p>
          <p>{item.COLLECTION_DESCRIPTION}</p>
          <p>{item.created_at}</p>
          </div>
        </div>
        ))}
    </div>
  );
}
