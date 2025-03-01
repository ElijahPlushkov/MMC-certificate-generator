function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
  
    sheet.appendRow([
      data.name,
      data.date,
      data.examType,
      data.overallScore,
      data.grade
    ]);
  
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  }