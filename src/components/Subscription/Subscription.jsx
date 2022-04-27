import MailchimpSubscribe from "react-mailchimp-subscribe";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const URL =
  "https://gmail.us14.list-manage.com/subscribe/post?u=0ddd03f045fd5eac37e55baeb&amp;id=cdbaf3ab11";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={URL} />;

// use the render prop and your custom form
const Subscription = () => (
  <MailchimpSubscribe
    url={URL}
    render={({ subscribe, status, message }) => (
      <div style={{ backgroundColor: "#405A46" }}>
        <div
          className="sign-up"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1% ",
          }}
        >
          <Typography className="text2" component="h1" variant="h5">
            Sign up for our newsletter for news +
            <br />
            exclusive updates on all-things 818.
          </Typography>
        </div>
        <div
          style={{
            height: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}

          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </div>
      </div>
    )}
  />
);

export default Subscription;
