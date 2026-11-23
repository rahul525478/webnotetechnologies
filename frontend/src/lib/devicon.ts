const DEVICON_SLUG_MAP: Record<string, string> = {
  "react-nextjs": "devicon-react-original colored",
  "typescript-javascript": "devicon-typescript-plain colored",
  "python-ai": "devicon-python-plain colored",
  "node-backend": "devicon-nodejs-plain colored",
  "mobile-flutter-reactnative": "devicon-flutter-plain colored",
  "cloud-devops": "devicon-amazonwebservices-plain-wordmark colored",
  "databases-sql-nosql": "devicon-postgresql-plain colored",
  "php-laravel": "devicon-laravel-line colored",
  "java-enterprise": "devicon-java-plain colored",
};

const DEVICON_NAME_MAP: Record<string, string> = {
  // Frontend
  "react": "devicon-react-original colored",
  "next.js": "devicon-nextjs-plain",
  "next.js 16": "devicon-nextjs-plain",
  "nextjs": "devicon-nextjs-plain",
  "vue": "devicon-vuejs-plain colored",
  "vue.js": "devicon-vuejs-plain colored",
  "nuxt.js": "devicon-nuxtjs-plain colored",
  "nuxtjs": "devicon-nuxtjs-plain colored",
  "angular": "devicon-angular-plain colored",
  "svelte": "devicon-svelte-plain colored",
  "sveltekit": "devicon-svelte-plain colored",
  "astro": "devicon-astro-plain colored",
  "solidjs": "devicon-solidjs-plain colored",
  "qwik": "devicon-qwik-plain colored",
  "remix": "devicon-remix-line-wordmark",
  "gatsby": "devicon-gatsby-original colored",
  "tailwind css": "devicon-tailwindcss-original colored",
  "tailwindcss": "devicon-tailwindcss-original colored",
  "bootstrap": "devicon-bootstrap-plain colored",
  "sass": "devicon-sass-original colored",
  "less": "devicon-less-plain-wordmark colored",
  "html": "devicon-html5-plain colored",
  "html5": "devicon-html5-plain colored",
  "html5 & css3": "devicon-html5-plain colored",
  "css": "devicon-css3-plain colored",
  "css3": "devicon-css3-plain colored",
  "web components": "devicon-html5-plain colored",
  "typescript": "devicon-typescript-plain colored",
  "javascript": "devicon-javascript-plain colored",

  // Backend & Languages
  "node.js": "devicon-nodejs-plain colored",
  "nodejs": "devicon-nodejs-plain colored",
  "express": "devicon-express-original",
  "express.js": "devicon-express-original",
  "nestjs": "devicon-nestjs-line colored",
  "python": "devicon-python-plain colored",
  "django": "devicon-django-plain colored",
  "fastapi": "devicon-fastapi-plain colored",
  "flask": "devicon-flask-original colored",
  "java": "devicon-java-plain colored",
  "java 21 lts": "devicon-java-plain colored",
  "spring": "devicon-spring-original colored",
  "spring boot": "devicon-spring-original colored",
  "spring boot 3": "devicon-spring-original colored",
  "php": "devicon-php-plain colored",
  "php 8.3": "devicon-php-plain colored",
  "laravel": "devicon-laravel-line colored",
  "laravel 11": "devicon-laravel-line colored",
  "symfony": "devicon-symfony-original",
  "c": "devicon-c-line colored",
  "c++": "devicon-cplusplus-line colored",
  "c#": "devicon-csharp-line colored",
  "c# .net": "devicon-dotnetcore-plain colored",
  "asp.net core": "devicon-dotnetcore-plain colored",
  "dotnet": "devicon-dot-net-plain colored",
  "dotnetcore": "devicon-dotnetcore-plain colored",
  "go": "devicon-go-line colored",
  "rust": "devicon-rust-line colored",
  "ruby": "devicon-ruby-plain colored",
  "ruby on rails": "devicon-rails-plain colored",
  "rails": "devicon-rails-plain colored",
  "kotlin": "devicon-kotlin-plain colored",
  "swift": "devicon-swift-plain colored",
  "dart": "devicon-dart-plain colored",
  "elixir": "devicon-elixir-plain-wordmark colored",
  "scala": "devicon-scala-plain colored",

  // Databases
  "postgresql": "devicon-postgresql-plain colored",
  "mysql": "devicon-mysql-original colored",
  "mariadb": "devicon-mariadb-original colored",
  "sqlite": "devicon-sqlite-plain colored",
  "microsoft sql server": "devicon-microsoftsqlserver-line colored",
  "sql server": "devicon-microsoftsqlserver-line colored",
  "oracle": "devicon-oracle-original colored",
  "oracle database": "devicon-oracle-original colored",
  "mongodb": "devicon-mongodb-plain colored",
  "redis": "devicon-redis-plain colored",
  "cassandra": "devicon-cassandra-plain colored",
  "couchdb": "devicon-couchdb-plain colored",
  "dynamodb": "devicon-dynamodb-plain colored",
  "firebase": "devicon-firebase-line colored",
  "firebase firestore": "devicon-firebase-line colored",
  "supabase": "devicon-supabase-plain colored",
  "neo4j": "devicon-neo4j-plain colored",
  "elasticsearch": "devicon-elasticsearch-plain colored",

  // Mobile
  "flutter": "devicon-flutter-plain colored",
  "react native": "devicon-react-original colored",
  "expo": "devicon-react-original colored",

  // AI & ML
  "pytorch": "devicon-pytorch-original colored",
  "tensorflow": "devicon-tensorflow-line colored",
  "hugging face": "devicon-huggingface-plain colored",
  "huggingface": "devicon-huggingface-plain colored",
  "pandas": "devicon-pandas-plain colored",
  "claude": "devicon-claude-plain",
  "anthropic claude": "devicon-claude-plain",

  // Cloud & DevOps
  "aws": "devicon-amazonwebservices-plain-wordmark colored",
  "aws cloud": "devicon-amazonwebservices-plain-wordmark colored",
  "amazon web services": "devicon-amazonwebservices-plain-wordmark colored",
  "amazon web services (aws)": "devicon-amazonwebservices-plain-wordmark colored",
  "aws sagemaker": "devicon-amazonwebservices-plain-wordmark colored",
  "google cloud": "devicon-googlecloud-plain colored",
  "google cloud platform": "devicon-googlecloud-plain colored",
  "gcp": "devicon-googlecloud-plain colored",
  "azure": "devicon-azure-plain colored",
  "docker": "devicon-docker-plain colored",
  "kubernetes": "devicon-kubernetes-line colored",
  "cloudflare": "devicon-cloudflare-plain colored",
  "cloudflare workers & cdn": "devicon-cloudflare-plain colored",
  "github": "devicon-github-original",
  "github actions": "devicon-githubactions-plain colored",
  "git": "devicon-git-plain colored",
  "graphql": "devicon-graphql-plain colored",
  "prisma": "devicon-prisma-original colored",
  "prisma orm": "devicon-prisma-original colored",
  "composer": "devicon-composer-line colored",
  "maven": "devicon-maven-plain colored",
  "gradle": "devicon-gradle-original",
};

export function getTechDeviconClass(identifier: string): string {
  if (!identifier) return "devicon-devicon-plain";
  const slugMatch = DEVICON_SLUG_MAP[identifier.toLowerCase()];
  if (slugMatch) return slugMatch;
  const nameMatch = DEVICON_NAME_MAP[identifier.toLowerCase().trim()];
  if (nameMatch) return nameMatch;
  for (const [key, value] of Object.entries(DEVICON_NAME_MAP)) {
    if (identifier.toLowerCase().includes(key)) {
      return value;
    }
  }
  return "devicon-devicon-plain";
}
