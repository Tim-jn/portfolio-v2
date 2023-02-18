import "./Contact.scss";

type Props = {
  title: string;
};

export default function Contact({ title }: Props) {
  return (
    <div className="contact-section">
      <div className="section-title">{title}</div>
    </div>
  );
}
