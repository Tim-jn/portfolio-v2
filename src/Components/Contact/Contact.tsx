import "./Contact.scss";

type Props = {
  title: string;
};

export default function Contact({ title }: Props) {
  return (
    <div className="contact-section">
      <div className="section-title">{title}</div>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p className="text-contact">
          Si vous avez une question, n'hésitez pas à me contacter en
          remplissant les champs ci-dessous. Je vous répondrais dès que possible
          !
        </p>

        <p>
          <label>
            nom : <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email : <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message : <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Envoyer</button>
        </p>
      </form>
    </div>
  );
}
