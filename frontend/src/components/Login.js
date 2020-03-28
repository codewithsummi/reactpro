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
                	<section id="form">
		<div className="container">
			<div className="row">
				<div className="col-sm-4 col-sm-offset-1">
					<div className="login-form">
						<h2>Login to your account</h2>
						<form action="#">
							<input type="email" placeholder="Email Address" />
							<input type="password" placeholder="Password" />
							<span>
								<input type="checkbox" className="checkbox"/> 
								Keep me signed in
							</span>
							<button type="submit" className="btn btn-default">Login</button>
						</form>
					</div>
				</div>
				<div className="col-sm-1">
					<h2 className="or">OR</h2>
				</div>
				<div className="col-sm-4">
					<div className="signup-form">
						<h2>New User Signup!</h2>
						<form action="#">
							<input type="text" placeholder="Name"/>
							<input type="email" placeholder="Email Address"/>
							<input type="password" placeholder="Password"/>
							<button type="submit" className="btn btn-default">Signup</button>
						</form>
					</div>
				</div>
			</div>
       <div classname="row">
         <div className="col-sm-6 text-right">
         <SocialButton
      provider='facebook'
      appId='YOUR_APP_ID'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure} className="btn btn-default"
    >
      Login with Facebook
    </SocialButton>
         </div>
         <div className="col-sm-6 text-left">
         <SocialButton
      provider='google'
      appId='45820139503-j9589m4ocs6e6mtk3lhv6ldofjr8i7cq.apps.googleusercontent.com'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure} className="btn btn-default"
    >
      Login with Gmail
    </SocialButton>
         </div>
       </div>
		</div>
	</section>
              
    
            </div>
        )
    }
}

export default Login
