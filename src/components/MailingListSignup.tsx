import React from "react";

const MailingListSignup = () => {
  return (
    <>
      <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://seattlecreativecode.us17.list-manage.com/subscribe/post?u=8a9cf5c1efd2bd9aa15de492e&amp;id=90ccaf1531"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Join Mailing List</label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div
              style={{
                position: "absolute",
                left: "-5000px",
              }}
            >
              <input
                type="text"
                name="b_8a9cf5c1efd2bd9aa15de492e_90ccaf1531"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailingListSignup;
