module.exports = {
  async afterCreate(event) {
    const { data } = event.params;

    // const administrators = await strapi.query("strapi::user").find({
    //   isActive: true,
    //   blocked: false,
    //   "roles.code": "strapi-super-admin",
    // });
    // const emails = administrators.map((a) => a.email);

    const emails = ["buiduyphong921@gmail.com", "levohoangan.01@gmail.com"];

    await strapi.plugins["email"].services.email.send({
      to: emails,
      subject: "[Anne. Blog] New message from CONTACT FORM",
      html: `
        <h3 style="color: royalblue;">
          [Anne.] Yay! We've got a new message from contact form
        </h3>
        <div>
          <p><strong>Name: </strong>${data?.name}</p>
          <p><strong>Email: </strong>${data?.email}</p>
          <p><strong>Phone: </strong>${data?.phone}6</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #bcc4ea; padding: 12px; border-radius: 8px;">
            ${data?.message}
          </p>
          <p style="color: #869af4;">
            (*) You can also check it out in Contacts section of
            <a
              href="http://admin.hoangann.me/admin/content-manager/collectionType/api::contact.contact?page=1&pageSize=10&sort=name:ASC"
              target="_blank"
              >admin area here!</a
            >
          </p>
          <hr />
          <p style="color: gray; text-align: center;">
            Copyright © 2022 Anne. All Right Reserved.
          </p>
        </div>
      `,
    });
  },
};
