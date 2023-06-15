import Button from './Button';

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>🥊 friend name</label>
      <input type="text" />
      <label>🏙️ image</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
