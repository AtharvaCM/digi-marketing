import { groq } from 'next-sanity';

// @sanity-typegen-ignore
export const LINK_QUERY = groq`
	...,
	internal->{ _type, title, metadata }
`;

// @sanity-typegen-ignore
export const NAVIGATION_QUERY = groq`
	title,
	items[]{
		${LINK_QUERY},
		link{ ${LINK_QUERY} },
		links[]{ ${LINK_QUERY} }
	}
`;

// @sanity-typegen-ignore
export const CTA_QUERY = groq`
	...,
	link{ ${LINK_QUERY} }
`;

// @sanity-typegen-ignore
export const MODULES_QUERY = groq`
	...,
	ctas[]{
		...,
		link{ ${LINK_QUERY} }
	},
	_type == 'blog-list' => { filteredCategory-> },
	_type == 'breadcrumbs' => { crumbs[]{ ${LINK_QUERY} } },
	_type == 'callout' => {
		content[]{
			...
		}
	},
	_type == 'card-list' => {
		cards[]{
			...,
			ctas[]{ ${CTA_QUERY} }
		}
	},
	_type == 'creative-module' => {
		modules[]{
			...,
			subModules[]{
				...,
				ctas[]{ ${CTA_QUERY} }
			}
		}
	},
	_type == 'hero' => {
		content[]{
			...
		}
	},
	_type == 'hero.saas' => {
		content[]{
			...
		}
	},
	_type == 'hero.split' => {
		content[]{
			...
		}
	},
	_type == 'logo-list' => { logos[]-> },
	_type == 'person-list' => { people[]-> },
	_type == 'pricing-list' => {
		tiers[]->{
			...,
			ctas[]{ ${CTA_QUERY} }
		}
	},
	_type == 'placeholder-block' => { 
		...
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
		ctas { ${CTA_QUERY} }
	},
	_type == 'tabbed-content' => {
		tabs[]{
			...,
			ctas[]{ ${CTA_QUERY} }
		}
	},
	_type == 'testimonial.featured' => { testimonial-> },
	_type == 'testimonial-list' => { testimonials[]-> },
`;

export const GET_SITE = groq`
	*[_type == 'site'][0]{
		...,
		ctas[]{ ${CTA_QUERY} },
		headerMenu->{ ${NAVIGATION_QUERY} },
		footerMenu->{ ${NAVIGATION_QUERY} },
		social->{ ${NAVIGATION_QUERY} },
		'ogimage': ogimage.asset->url
	}
`;

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
