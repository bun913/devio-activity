import {join} from 'path'
import { mkdirSync } from 'fs';
import { chromium } from 'playwright';

export class Activity {
  readonly authorID: string
  URL: string = 'https://dev.classmethod.jp/author'
  SAVE_DIR: string = 'developersio'

  constructor(authorID: string) {
    this.authorID = authorID
  }

  async download() {
    const url = `${this.URL}/${this.authorID}`
    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url) 
    await page.locator('.apexcharts-menu-icon').click()
    const downloadPromise = page.waitForEvent('download');
    await page.locator('.exportSVG').click()
    const download = await downloadPromise
    mkdirSync(this.SAVE_DIR, {recursive: true})
    const savePath = join(this.SAVE_DIR, `${this.authorID}.svg`)
    await download.saveAs(savePath)
    await browser.close()
    return savePath
  }
}