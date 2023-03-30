#!/usr/bin/env nodejs

const puppeteer = require ('puppeteer');
const express = require('express');
var app = express(exports);

const main = async (url, landscape) => {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  let pdf = ''

  console.log(url);

  await page.goto(url, {waitUntil: 'networkidle0', timeout: 30000}).catch((res) => {
    console.log('fails', res)
  });
  const pageStyle = landscape ? '@page { size: A4 landscape; }': '@page { size: A4; }'
  pageStyle += '.print-hide { display: none !important }'
  page.addStyleTag(
    {'content': pageStyle}
  )
  pdf = await page.pdf({ format: 'A4' }).catch((res) => {
    console.log('fails', res)
  });
 
  await browser.close().catch((res) => {
    console.log('fails', res)
  });

  return pdf

 }

app.get('/headless-pdf', async function (req, res) {

  const pdf = await main(req.query.url, req.query.landscape);
  res.set("Content-Disposition", "attachment;filename=" + (req.query.filename || "print") + ".pdf");
  res.contentType("application/pdf");
  res.send(pdf);
});

app.listen(8080, function(){ console.log('Listening on 8080') });
