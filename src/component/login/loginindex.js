

function LoginIndex() {


  return (
    <div>
      <div>This is Login Index</div>
      <table style={{backgroundColor:"red"}}>
        <tbody>
            <tr>
                <td>User name</td>
                <td><input /> </td>
            </tr>
            <tr>
            <td>Password</td>
                <td><input type="text" /> </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type={"button"} value="Login" />
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoginIndex;
