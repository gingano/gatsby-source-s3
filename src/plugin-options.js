import yup from 'yup';

export const schema = yup.object().shape({
  aws: yup
    .object()
    .shape({
      accessKeyId: yup.string(),
      secretAccessKey: yup.string(),
      sessionToken: yup.string(),
      domain: yup.string(),
    })
    .default(() => ({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN,
      domain: process.env.AWS_DOMAIN,
    })),
  buckets: yup.array().required(),
});
