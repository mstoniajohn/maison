//
const cheerio = require('cheerio')

import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const b = await axios.get('https://www.instagram.com/skylarknegril')
    const html = await b.data
    let ulList = []
    const $ = cheerio.load(html)
    const $bodyList = $(
      '#mount_0_0_Px > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.xnz67gz.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.xh8yej3.x1gryazu.x10o80wk.x14k21rp.x1porb0y.x17snn68.x6osk4m > div:nth-child(2) > section > main > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > article > div > div > div'
    )

    $bodyList.each(function (i, elem) {
      ulList[i] = {
        img: $(elem)
          .find(
            '#mount_0_0_TJ > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.xnz67gz.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.xh8yej3.x1gryazu.x10o80wk.x14k21rp.x1porb0y.x17snn68.x6osk4m > div:nth-child(2) > section > main > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > article > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > a > div._aagu > div._aagv > img'
          )
          .attr('src'),
      }
    })
    const data = ulList.filter((n) => n.img)
    console.log($bodyList)
    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `${req.method} is not allowed` }) //405 method not alloed
  }
}

/*
 ul > li.o-chart-results-list__item.\\/\\/.u-width-200.u-width-100\\@tablet-only.u-width-67\\@mobile-max.lrv-u-border-b-1.u-border-b-0\\@mobile-max.lrv-u-border-color-grey.u-flex-order-n1\\@mobile-max > div > div > img
*/
