import React, { Component } from 'react'
import SocialButton from './SocialButton';
export class Login extends Component {
     handleSocialLogin = (user) => {
        console.log(user._profile)
      }
       
     handleSocialLoginFailure = (err) => {
        console.error(err)
      }
    render() {
        return (
            <div>
                <h1>Login Here</h1>
                <SocialButton
      provider='facebook'
      appId='YOUR_APP_ID'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton><br/>
    <SocialButton
      provider='google'
      appId='45820139503-j9589m4ocs6e6mtk3lhv6ldofjr8i7cq.apps.googleusercontent.com'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure}
    >
      Login with Gmail
    </SocialButton>
            </div>
        )
    }
}

export default Login
