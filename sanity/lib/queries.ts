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

export const reputationBlockQuery = groq`
	_type == 'reputation-block' => { reputation-> }
`;

// @sanity-typegen-ignore
export const modulesQuery = groq`
	...,
	ctas[]{ ${ctaQuery} },
	_type == 'blog-list' => { predefinedFilters[]-> },
	_type == 'breadcrumbs' => { crumbs[]{ ${linkQuery} } },
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
			${reputationBlockQuery}
		}
	},
	_type == 'hero.saas' => {
		content[]{
			...,
			${reputationBlockQuery}
		}
	},
	_type == 'hero.split' => {
		content[]{
			...,
			${reputationBlockQuery}
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
