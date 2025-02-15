import { groq } from 'next-sanity';

// @sanity-typegen-ignore
export const linkQuery = groq`
	...,
	internal->{ _type, title, metadata }
`;

// @sanity-typegen-ignore
export const ctaQuery = groq`
	...,
	link{ ${linkQuery} }
`;

// @sanity-typegen-ignore
export const modulesQuery = groq`
	...,
	ctas[]{
		...,
		link{ ${linkQuery} }
	},
	_type == 'blog-list' => { filteredCategory-> },
	_type == 'breadcrumbs' => { crumbs[]{ ${linkQuery} } },
	_type == 'callout' => {
		content[]{
			...
		}
	},
	_type == 'card-list' => {
		cards[]{
			...,
			ctas[]{ ${ctaQuery} }
		}
	},
	_type == 'creative-module' => {
		modules[]{
			...,
			subModules[]{
				...,
				ctas[]{ ${ctaQuery} },
			}
		}
	},
	_type == 'hero' => {
		content[]{
			...,
		}
	},
	_type == 'hero.saas' => {
		content[]{
			...,
		}
	},
	_type == 'hero.split' => {
		content[]{
			...,
		}
	},
	_type == 'logo-list' => { logos[]-> },
	_type == 'placeholder-block' => { 
		...
	 },
	_type == 'pricing-list' => {
		tiers[]->{
			...,
			ctas[]{ ${ctaQuery} }
		}
	},
	_type == 'richtext-module' => {
		'headings': select(
			tableOfContents => content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
				style,
				'text': pt::text(@)
			}
		),
	},
	_type == 'service-details' => {
		...,
		ctas { ${ctaQuery} }
	},
	_type == 'tabbed-content' => {
		tabs[]{
			...,
			ctas[]{ ${ctaQuery} },
			features[]-> {
				...
			}
		}
	},
	_type == 'testimonial.featured' => { testimonial-> },
	_type == 'testimonial-list' => { testimonials[]-> },
`;

// @sanity-typegen-ignore
const navigationQuery = groq`
	title,
	items[]{
		${linkQuery},
		link{ ${linkQuery} },
		links[]{ ${linkQuery} }
	}
`;

export const GET_SITE = groq`*[_type == 'site'][0]{
  ...,
  ctas[]{
    ...,
    link{ ${linkQuery} }
  },
  headerMenu->{ ${navigationQuery} },
  footerMenu->{ ${navigationQuery} },
  social->{ ${navigationQuery} },
  'ogimage': ogimage.asset->url
}`;

export const METADATA_QUERY = groq`
	metadata {
    title,
    description,
    keywords,
    applicationName,
    referrer,
    canonical,
    authors[] {
      name,
      "url": authorUrl
    },
    openGraph {
      title,
      description,
      type,
      "url": canonical,
      siteName,
      images[] {
        "url": image.asset->url + '?w=1200',
        width,
        height,
        alt
      }
    }
  }
`;
