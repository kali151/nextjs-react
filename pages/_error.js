import React from 'react';
import Link from 'next/link'
const errorPage = () => (
    <div>
      <p>
        Try <Link href="/"><a>back</a></Link>
      </p>
    </div>
);

export default errorPage;