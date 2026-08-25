import { useEffect } from 'react';
import { PageType, CaseStudy } from '../types';

interface SeoHeadProps {
  page: PageType;
  caseStudy?: CaseStudy | null;
}

export function SeoHead({ page, caseStudy }: SeoHeadProps) {
  useEffect(() => {
    let title = 'Dickson Ngeche | Digital Strategy & SEO Consultant';
    let description = 'Dickson Ngeche helps businesses turn ideas into clear digital propositions, build high-performing digital presence, and become discoverable through strategic SEO and purposeful digital execution.';
    let canonical = 'https://dicksonngeche.com';

    if (page === 'services') {
      title = 'Digital Strategy & SEO Services | Dickson Ngeche';
      description = 'Specialist digital strategy, search engine optimization (SEO), technical SEO, and digital positioning consultancy designed for commercial clarity and organic growth.';
      canonical = 'https://dicksonngeche.com/services';
    } else if (page === 'pricing') {
      title = 'Work With Me | DKNgeche — Digital Strategy & Growth';
      description = 'Explore digital strategy, web experience, SEO, digital brand and advisory engagements with Dickson Ngeche.';
      canonical = 'https://dicksonngeche.com/pricing';
    } else if (page === 'work') {
      title = 'SEO & Digital Strategy Case Studies | Dickson Ngeche';
      description = 'Selected client case studies showcasing strategic thinking, search architecture, digital positioning, and measurable outcomes.';
      canonical = 'https://dicksonngeche.com/work';
    } else if (page === 'about') {
      title = 'About Dickson Ngeche | Digital Strategy & SEO Philosophy';
      description = 'Learn about Dickson Ngeche—a digital strategist operating at the intersection of business, digital positioning, SEO, and technology.';
      canonical = 'https://dicksonngeche.com/about';
    } else if (page === 'contact') {
      title = 'Work With Dickson Ngeche | Digital Strategy & SEO Consultation';
      description = 'Start a conversation about turning your business idea or existing proposition into a clear, discoverable digital strategy.';
      canonical = 'https://dicksonngeche.com/contact';
    } else if (page === 'case-study' && caseStudy) {
      title = `${caseStudy.client} — ${caseStudy.category} Case Study | Dickson Ngeche`;
      description = caseStudy.summary;
      canonical = `https://dicksonngeche.com/work/${caseStudy.slug}`;
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('schema-json-ld');
    if (existingScript) existingScript.remove();

    const schemaData = generateSchema(page, caseStudy);
    const script = document.createElement('script');
    script.id = 'schema-json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount if needed
    };
  }, [page, caseStudy]);

  return null;
}

export function generateSchema(page: PageType, caseStudy?: CaseStudy | null) {
  const basePerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dickson Ngeche',
    jobTitle: 'Digital Strategy & SEO Consultant',
    description: 'Digital strategist and SEO consultant helping businesses turn ideas into clear digital propositions, high-performance web architecture, and organic search visibility.',
    url: 'https://dicksonngeche.com',
    sameAs: [
      'https://linkedin.com/in/dicksonngeche',
      'https://twitter.com/dicksonngeche'
    ],
    knowsAbout: [
      'Digital Strategy',
      'Search Engine Optimisation (SEO)',
      'Technical SEO',
      'Digital Positioning',
      'Information Architecture',
      'Conversion Rate Optimisation'
    ]
  };

  const baseConsultancy = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Dickson Ngeche Consultancy',
    founder: {
      '@type': 'Person',
      name: 'Dickson Ngeche'
    },
    url: 'https://dicksonngeche.com',
    description: 'Specialist digital strategy, digital positioning, and technical SEO advisory for ambitious enterprises and organizations.',
    areaServed: ['Kenya', 'East Africa', 'Global Remote'],
    serviceType: [
      'Digital Strategy Advisory',
      'SEO Audits & Optimization',
      'Technical SEO',
      'Digital Value Proposition Development',
      'Website Strategy'
    ]
  };

  if (page === 'case-study' && caseStudy) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        basePerson,
        {
          '@type': 'Article',
          headline: `${caseStudy.client} Case Study: ${caseStudy.summary}`,
          description: caseStudy.summary,
          author: {
            '@type': 'Person',
            name: 'Dickson Ngeche'
          },
          publisher: baseConsultancy,
          about: caseStudy.industry,
          keywords: caseStudy.services.join(', ')
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://dicksonngeche.com'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Case Studies',
              item: 'https://dicksonngeche.com/work'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: caseStudy.client,
              item: `https://dicksonngeche.com/work/${caseStudy.slug}`
            }
          ]
        }
      ]
    };
  }

  if (page === 'services') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        basePerson,
        baseConsultancy,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dicksonngeche.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dicksonngeche.com/services' }
          ]
        }
      ]
    };
  }

  if (page === 'pricing') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        basePerson,
        baseConsultancy,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dicksonngeche.com' },
            { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://dicksonngeche.com/pricing' }
          ]
        }
      ]
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      basePerson,
      baseConsultancy,
      {
        '@type': 'WebSite',
        name: 'Dickson Ngeche — Digital Strategy & SEO',
        url: 'https://dicksonngeche.com',
        description: 'Turning business ideas into digital strategies that get seen, understood and remembered.'
      }
    ]
  };
}
