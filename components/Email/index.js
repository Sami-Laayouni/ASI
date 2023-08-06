export default function Email({
  first_name,
  last_name,
  email,
  phone,
  message,
  kids,
  visit,
}) {
  const date = new Date();
  if (!visit) {
    return (
      <div>
        <p>To whom it may concern,</p>
        <p>
          {" "}
          A recent inquiry has been asked by
          {first_name} {last_name} through the ASI website. Below you will find
          the information on the person and the message sent.
        </p>
        <p>First Name: {first_name}</p>
        <p>Last name: {last_name}</p>
        <p>Email address: {email}</p>
        <p>Phone number: {phone}</p>
        <p>Number of kids concerned: {kids.length}</p>
        <p>
          Kids name and ages (if applies):
          {kids.map((kid) => `${kid.name} (${kid.age} years old)`).join(",")}
        </p>
        <p>Message: {message}</p>
        <p> This message was sent on {date.toISOString()}.</p>
        <p>
          Please kindly reach out to the email above to address the inquiry and
          provide the necessary assistance or information.
        </p>
        <p>Best regards,</p>
        <p>Sami Laayouni,</p>
        <p>Developer of the school website</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>To whom it may concern,</p>
        <p>
          {" "}
          A recent request to visit the school has been made by
          {first_name} {last_name} through the ASI website. Below you will find
          the information on the person and the message sent.
        </p>
        <p>First Name: {first_name}</p>
        <p>Last name: {last_name}</p>
        <p>Email address: {email}</p>
        <p>Phone number: {phone}</p>
        <p>Number of kids concerned: {kids.length}</p>
        <p>
          Kids name and ages (if applies):
          {kids.map((kid) => `${kid.name} (${kid.age} years old)`).join(",")}
        </p>
        <p>Message: {message}</p>
        <p> This request was sent on {date.toISOString()}.</p>

        <p>Best regards,</p>
        <p>Sami Laayouni,</p>
        <p>Developer of the school website</p>
      </div>
    );
  }
}
