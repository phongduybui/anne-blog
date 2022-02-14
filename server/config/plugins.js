module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 465), //587
        secure: true, // use SSL
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env("MAIL_DEFAULT_FROM", "phongtrotot.hotro@gmail.com"),
        defaultReplyTo: env(
          "MAIL_DEFAULT_REPLY",
          "phongtrotot.hotro@gmail.com"
        ),
      },
    },
  },
});
