const Notification = ({ message }) => {
  const errorStyle = {
    color: 'red',
    backgroundColor: '#E7E9EB',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 20,
  };

  const successStyle = {
    color: 'green',
    backgroundColor: '#E7E9EB',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 20,
  };

  switch (message) {
    case null:
      return null;
    case 'error':
      return (
        <div className="error" style={errorStyle}>
          error: user does not exist
        </div>
      );
    case 'success':
      return (
        <div className="success" style={successStyle}>
          SUCCESS!
        </div>
      );
    default:
      return null;
  }
};

export default Notification;
