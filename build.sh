rm -rf dist
mkdir -p dist
mkdir -p functions/.nuxt

# server
cp -R .nuxt functions/

# client
cp -R static dist/client
cp -R .nuxt/dist/client/* dist/client/
