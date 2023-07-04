import DiagonalBox from "../components/shared/DiagonalBox/diagonal-box";

interface Props {}

function Contact(props: Props) {
  const {} = props;

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-[4rem] font-bold -my-2">Send me a Message</h1>

      <form className="p-8 my-4 bg-base-200">
        <div>Name</div>
        <div>Email</div>
        <textarea />
      </form>
    </div>
  );
}

export default Contact;
