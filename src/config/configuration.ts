export default () => ({
  application: {
    port: parseInt(process.env.PORT, 10) || 3000,
    shouldArchive: process.env.SHOULD_ARCHIVE === 'true',
    useRawSql: process.env.USE_RAW_SQL === 'true',
  },
  storyblok: {
    access_token: process.env.STORYBLOK_ACCESS_TOKEN,
  },
});
