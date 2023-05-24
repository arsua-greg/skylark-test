import Button from "./Button";

const ConfirmEmailModal = () => {
  return (
    <div className="bg-white">
      <label htmlFor="my-modal-3" className="btn">
        open modal
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            下記メールアドレスに認証メールを送信します。
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
        <Button text="認証メールを送信する" />
      </div>
    </div>
  );
};

export default ConfirmEmailModal;
