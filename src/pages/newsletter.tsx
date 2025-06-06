import React from 'react'

import { Stack, Typography } from '@mui/material'
import Layout from '@/components/layout/Layout'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/text/Title'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from '@/components/forms/NewsletterForm'

export default function newslettter() {
  return (
    <Layout title="Newsletter">
      <PageContainer>
        <Title>JOIN OUR NEWSLETTER</Title>
        <SkylarkDivider />
        <Typography>
          Feel well-informed with our local’s newsletter detailing the top
          recommendations and wonderful activities to enjoy during your next
          vacation to Negril! Sent to you once a month, why not stay up-to-date
          on the best things to do and places to stay on the stunning shores of
          Jamaica. All you have to do is provide us with your email, and we’ll
          compile a tailored selection of what to see and do, as well as where
          to stay on your next vacation to Negril.
        </Typography>
        <Stack maxWidth={500} mx="auto" pt={2}>
          {/* mailchimp */}
          <MailchimpSubscribe
            url="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0&amp;SIGNUP=newsletter"
            render={(props: any) => {
              const { subscribe, status, message } = props || {}
              return (
                <NewsletterForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )
            }}
          />
        </Stack>

        {/* <Script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
          onLoad={() => {
            console.log('Script has loaded')
          }}
        />
        <div
          className="ctct-inline-form"
          data-form-id="bd66cb98-0956-4429-9998-c6e4f0628a08"
        ></div> */}
      </PageContainer>
    </Layout>
  )
}

//

/*
<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
       
           </style>
           <div id="mc_embed_signup">
               <form action="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                   <div id="mc_embed_signup_scroll"><h2></h2>
                       <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                       <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
           <div hidden=""><input type="hidden" name="tags" value="6752365"></div>
                   <div id="mce-responses" class="clear">
                       <div class="response" id="mce-error-response" style="display: none;"></div>
                       <div class="response" id="mce-success-response" style="display: none;"></div>
                   </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_05ef4612941924f8daf6aa200_12975f07d3" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
               </div>
           </form>
           </div>
           <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='SIGNUP';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
           
 */
