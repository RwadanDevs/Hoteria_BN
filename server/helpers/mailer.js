import dotenv from 'dotenv';
import nodemailer from "nodemailer";

dotenv.config()

export default async (data) => {

    const transactionMessage = `
        <div style="
            width:90%;margin: 0 auto;
            text-align:center;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
        ">
            <div style="
                background:orange;
                padding: 5px;
                font-size: 35px;
                border-top-right-radius: 30px;
                border-top-left-radius: 30px;
            ">
                <h1 >PASADA</h1>
            </div>
            <div style="
                background:whitesmoke;
                padding: 10px;
                margin: 0 auto;
                border:1px solid orange;
                border-top:none;
            ">
                <h3 style="font-size: 30px;">Transaction</h3>
                <section style="display:flex;width: 90%; margin: 0 auto;">
                    <span style="flex: 0.1;">🙍</span>
                    <span style="flex: 0.9;text-align: left;">${data.author_name}</span>
                </section>
                <section style="display:flex;width: 90%; margin: 0 auto;">
                    <span style="flex: 0.1;">🍷</span>
                    <span style="flex: 0.9;text-align: left;">${data.product_name}</span>
                </section>
                <section style="display:flex;width: 90%; margin: 0 auto;">
                    <span style="flex: 0.1;">📑</span>
                    <span style="flex: 0.9;text-align: left;">${data.details}</span>
                </section>
            </div>
        </div>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user:process.env.EMAIL,
            pass:process.env.PASSWORD 
        }
    });

    await transporter.sendMail({
        from: `'From Posada' 👻 ${process.env.EMAIL}`, 
        to: "christophekwizera1@gmail.com", 
        subject: "Transactions Successful ✔", 
        text: "Pasada Excellent` Service", 
        html: transactionMessage
    },(err,info)=>{
        if (err) {
            console.log(err);
          } else {
            console.log('Email sent: ' + info.response);
          }
    });
}
