import { config } from '../config/config';
import sgMail from '@sendgrid/mail';

interface Mail {
  sourceAddress: string;
  destAddress: string;
  subject: string;
  msgBody: string;
}

export default class SendGridEmailService {
  private sendgrid: any;
  constructor() {
    this.sendgrid = sgMail;
    this.sendgrid.setApiKey(config.emailKey);
  }
  public sendMail(email: Mail) {
      const msg = {
        to: email.destAddress,
        from: email.sourceAddress,
        subject: email.subject,
        text: email.msgBody,
      };
      this.sendgrid.send(msg);
  }
}

