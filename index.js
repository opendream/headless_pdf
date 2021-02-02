#!/usr/bin/env nodejs

const puppeteer = require ('puppeteer');
const express = require('express');
var app = express(exports);

const main = async (url) => {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf

 }

app.get('/headless-pdf', async function (req, res) {

  const pdf = await main(req.query.url);
  res.set("Content-Disposition", "attachment;filename=" + (req.query.filename || "print") + ".pdf");
  res.contentType("application/pdf");
  res.send(pdf);
});

app.listen(8080, function(){ console.log('Listening on 8080') });
