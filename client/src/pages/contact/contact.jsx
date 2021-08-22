import "./contact.css"

export default function Contact() {
    return (
    <div className="main-container">    
        <div class="container">
            <div class="content">
                <div class="left-side">
                    <div class="address details">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="topic">Address</div>
                        <div class="text-one">Persistent Systems</div>
                        <div class="text-two">Hinjewadi, Pune</div>
                    </div>
                    <div class="phone details">
                        <i class="fas fa-phone-alt"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one">+91-9405212179</div>
                        <div class="text-two">+91-8888888888</div>
                    </div>
                    <div class="email details">
                        <i class="fas fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">bloggerdiaries@gmail.com</div>
                        <div class="text-two">info.bloggerdiaries@gmail.com</div>
                    </div>
                </div>
                <div class="right-side" >
                    <br />
                    <div class="topic-text">Talk to a Human!</div><br />
                    <p class="para">You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox, never to be seen or heard from again. At Blogger Diaries, we provide the exceptional service we'd want to experience ourselves!</p>

                </div>
            </div>
        </div>
        </div>    
    )
}