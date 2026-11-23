const DEVICON_SLUG_MAP: Record<string, string> = {
  "react-nextjs": "devicon-react-original colored",
  "typescript-javascript": "devicon-typescript-plain colored",
  "python-ai": "devicon-python-plain colored",
  "node-backend": "devicon-nodejs-plain colored",
  "mobile-flutter-reactnative": "devicon-flutter-plain colored",
  "cloud-devops": "devicon-amazonwebservices-plain-wordmark colored",
  "databases-sql-nosql": "devicon-postgresql-plain colored",
  "php-laravel": "devicon-laravel-original colored",
  "java-enterprise": "devicon-java-plain colored",
};

const DEVICON_NAME_MAP: Record<string, string> = {
  "react": "devicon-react-original colored",
  "next.js": "devicon-nextjs-plain",
  "nextjs": "devicon-nextjs-plain",
  "typescript": "devicon-typescript-plain colored",
  "javascript": "devicon-javascript-plain colored",
  "python": "devicon-python-plain colored",
  "pytorch": "devicon-pytorch-original colored",
  "pandas": "devicon-pandas-plain colored",
  "node.js": "devicon-nodejs-plain colored",
  "nodejs": "devicon-nodejs-plain colored",
  "express": "devicon-express-original",
  "express.js": "devicon-express-original",
  "nestjs": "devicon-nestjs-original colored",
  "flutter": "devicon-flutter-plain colored",
  "react native": "devicon-react-original colored",
  "dart": "devicon-dart-plain colored",
  "aws": "devicon-amazonwebservices-plain-wordmark colored",
  "amazon web services": "devicon-amazonwebservices-plain-wordmark colored",
  "amazon web services (aws)": "devicon-amazonwebservices-plain-wordmark colored",
  "gcp": "devicon-googlecloud-plain colored",
  "google cloud": "devicon-googlecloud-plain colored",
  "google cloud platform": "devicon-googlecloud-plain colored",
  "docker": "devicon-docker-plain colored",
  "kubernetes": "devicon-kubernetes-plain colored",
  "cloudflare": "devicon-cloudflare-plain colored",
  "cloudflare workers & cdn": "devicon-cloudflare-plain colored",
  "postgresql": "devicon-postgresql-plain colored",
  "mongodb": "devicon-mongodb-plain colored",
  "redis": "devicon-redis-plain colored",
  "mysql": "devicon-mysql-plain colored",
  "supabase": "devicon-supabase-plain colored",
  "php": "devicon-php-plain colored",
  "php 8.3": "devicon-php-plain colored",
  "laravel": "devicon-laravel-original colored",
  "laravel 11": "devicon-laravel-original colored",
  "java": "devicon-java-plain colored",
  "java 21 lts": "devicon-java-plain colored",
  "spring": "devicon-spring-original colored",
  "spring boot": "devicon-spring-original colored",
  "spring boot 3": "devicon-spring-original colored",
  "tailwind css": "devicon-tailwindcss-original colored",
  "github": "devicon-github-original",
  "github actions": "devicon-githubactions-plain colored",
  "git": "devicon-git-plain colored",
  "fastapi": "devicon-fastapi-plain colored",
  "swift": "devicon-swift-plain colored",
  "kotlin": "devicon-kotlin-plain colored",
  "html": "devicon-html5-plain colored",
  "html5": "devicon-html5-plain colored",
  "css": "devicon-css3-plain colored",
  "css3": "devicon-css3-plain colored",
  "c": "devicon-c-original colored",
  "c++": "devicon-cplusplus-plain colored",
  "angular": "devicon-angular-plain colored",
  "vue": "devicon-vuejs-plain colored",
  "vue.js": "devicon-vuejs-plain colored",
  "graphql": "devicon-graphql-plain colored",
  "openai": "devicon-unifiedmodelinglanguage-plain colored",
  "langchain": "devicon-python-plain colored",
  "zod validation": "devicon-typescript-plain colored",
  "prisma orm": "devicon-prisma-original colored",
  "composer": "devicon-composer-line colored",
  "maven": "devicon-maven-plain colored",
  "gradle": "devicon-gradle-original",
  "expo": "devicon-react-original colored",
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
