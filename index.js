#!/usr/bin/env nodejs

const puppeteer = require ('puppeteer');
const express = require('express');
var app = express(exports);

const main = async (url, landscape) => {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  let pdf = ''

  try {
    await page.goto(url, {waitUntil: 'networkidle0'});
    pdf = await page.pdf({ format: 'A4', landscape: landscape ? true: false });
  } catch(err) {}
 
  await browser.close();
  return pdf

 }

app.get('/headless-pdf', async function (req, res) {

  const pdf = await main(req.query.urli, req.query.landscape);
  res.set("Content-Disposition", "attachment;filename=" + (req.query.filename || "print") + ".pdf");
  res.contentType("application/pdf");
  res.send(pdf);
});

app.listen(8080, function(){ console.log('Listening on 8080') });
