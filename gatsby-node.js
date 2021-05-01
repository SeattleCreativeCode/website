exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
		type Mdx implements Node {
			frontmatter: Frontmatter
		}

		type Frontmatter {
			date: Date,
			repetition: String,
			link: String!,
			time: String!,
			title: String!
		}
	`;

  createTypes(typeDefs);
};
