function FormatSeatString (_a, _s, _f) {
  return _f.replace('{0}', _a).replace('{1}', _s);
}

function parseOrderTicket() {
  var targetDate = new Date('2024-04-22T00:00:00+08:00');
  var currentDate = new Date();
  if (currentDate > targetDate) {
    console.log("[TGHFFU] 2024 GHFFFP is over. Thanks for using this extension.");
    return;
  }

  var string_venue10 = '台北信義威秀影城10廳';
  var string_venue14 = '台北信義威秀影城14廳';
  var string_venue11 = '台北信義威秀影城';
  var string_venue5 = '台北信義威秀影城5廳';
  var string_area11 = '11廳';
  var string_areaNa = '不分區';
  var string_seatFormat = '{0}排{1}';
  var string_checkStaff = '至影展服務台更換座位';
  var re_matchSeat = /([A-Z])排(\d+)/;

  var languageButton = document.querySelector('.location-toggle');
  if (languageButton) {
    if (languageButton.textContent.includes('中文')) {
      console.log("[TGHFFU] Language = 中文");
    } else if (languageButton.textContent.includes('EN')) {
      console.log("[TGHFFU] Language = English");

      string_venue10 = 'Vie Show Hsin Yi 10';
      string_venue14 = 'Vie Show Hsin Yi 14';
      string_venue11 = 'Vie Show Hsin Yi';
      string_venue5 = 'Vie Show Hsin Yi 5';
      // string_area11 = '11廳';
      // string_areaNa = '不分區';
      string_seatFormat = 'Row{0} No.&nbsp;{1}';
      string_checkStaff = 'Contact the service desk';
      re_matchSeat = /Row([A-Z])\sNo\.\s(\d+)/;
    }
  }

  var orderTickets = document.querySelectorAll('.orderTicket');
  
  orderTickets.forEach(function(orderTicket) {
    var venueDiv = orderTicket.querySelector('.text-indent-fa.small.text-light.ticketEventVenue');

    if (venueDiv && venueDiv.textContent.includes(string_venue10)) {
      //Handle vanue 10 cases
      venueDiv.childNodes.forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(string_venue10, string_venue14);
        }
      });

      var seatTD = orderTicket.querySelector('.orderTicket > td:nth-child(3)');
      if (seatTD) {
        var seatText = seatTD.textContent.trim();
        var matches = seatText.match(re_matchSeat);
        if (matches && matches.length === 3) {
          var aisle = matches[1];
          var seatNumber = matches[2];
          var newSeatText = '';

          if (aisle === 'A' && seatNumber === '17') {
            newSeatText = FormatSeatString('P', '14', string_seatFormat);
          } else if (aisle === 'A' && seatNumber === '18') {
            newSeatText = FormatSeatString('P', '15', string_seatFormat);
          } else if (aisle === 'A' && seatNumber === '19') {
            newSeatText = FormatSeatString('P', '16', string_seatFormat);
          } else if (aisle === 'A' && seatNumber === '20') {
            newSeatText = string_checkStaff;
          } else if (aisle === 'B' && seatNumber === '17') {
            newSeatText = FormatSeatString('P', '4', string_seatFormat);
          } else if (aisle === 'B' && seatNumber === '18') {
            newSeatText = FormatSeatString('P', '3', string_seatFormat);
          } else if (aisle === 'B' && seatNumber === '19') {
            newSeatText = FormatSeatString('P', '2', string_seatFormat);
          } else if (aisle === 'B' && seatNumber === '20') {
            newSeatText = FormatSeatString('P', '1', string_seatFormat);
          } else if (aisle === 'C' && seatNumber === '17') {
            newSeatText = FormatSeatString('P', '10', string_seatFormat);
          } else if (aisle === 'C' && seatNumber === '18') {
            newSeatText = FormatSeatString('P', '11', string_seatFormat);
          } else if (aisle === 'C' && seatNumber === '19') {
            newSeatText = FormatSeatString('P', '12', string_seatFormat);
          } else if (aisle === 'C' && seatNumber === '20') {
            newSeatText = FormatSeatString('P', '13', string_seatFormat);
          } else if (aisle === 'D' && seatNumber === '17') {
            newSeatText = FormatSeatString('M', '7', string_seatFormat);
          } else if (aisle === 'D' && seatNumber === '18') {
            newSeatText = FormatSeatString('M', '6', string_seatFormat);
          } else if (aisle === 'D' && seatNumber === '19') {
            newSeatText = FormatSeatString('M', '5', string_seatFormat);
          } else if (aisle === 'D' && seatNumber === '20') {
            newSeatText = FormatSeatString('M', '4', string_seatFormat);
          } else if (aisle === 'E' && seatNumber === '17') {
            newSeatText = FormatSeatString('N', '8', string_seatFormat);
          } else if (aisle === 'E' && seatNumber === '18') {
            newSeatText = FormatSeatString('N', '7', string_seatFormat);
          } else if (aisle === 'E' && seatNumber === '19') {
            newSeatText = FormatSeatString('N', '6', string_seatFormat);
          } else if (aisle === 'E' && seatNumber === '20') {
            newSeatText = FormatSeatString('N', '5', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '1') {
            newSeatText = FormatSeatString('M', '2', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '2') {
            newSeatText = FormatSeatString('M', '3', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '17') {
            newSeatText = FormatSeatString('N', '9', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '18') {
            newSeatText = FormatSeatString('N', '10', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '19') {
            newSeatText = FormatSeatString('N', '11', string_seatFormat);
          } else if (aisle === 'F' && seatNumber === '20') {
            newSeatText = FormatSeatString('N', '12', string_seatFormat);
          } else if (aisle === 'G' && seatNumber === '17') {
            newSeatText = FormatSeatString('O', '8', string_seatFormat);
          } else if (aisle === 'G' && seatNumber === '18') {
            newSeatText = FormatSeatString('O', '7', string_seatFormat);
          } else if (aisle === 'G' && seatNumber === '19') {
            newSeatText = FormatSeatString('O', '6', string_seatFormat);
          } else if (aisle === 'G' && seatNumber === '20') {
            newSeatText = FormatSeatString('O', '5', string_seatFormat);
          } else if (aisle === 'H' && seatNumber === '17') {
            newSeatText = FormatSeatString('O', '9', string_seatFormat);
          } else if (aisle === 'H' && seatNumber === '18') {
            newSeatText = FormatSeatString('O', '10', string_seatFormat);
          } else if (aisle === 'H' && seatNumber === '19') {
            newSeatText = FormatSeatString('O', '11', string_seatFormat);
          } else if (aisle === 'H' && seatNumber === '20') {
            newSeatText = FormatSeatString('O', '12', string_seatFormat);
          } else if (aisle === 'I' && seatNumber === '17') {
            newSeatText = FormatSeatString('N', '13', string_seatFormat);
          } else if (aisle === 'I' && seatNumber === '18') {
            newSeatText = FormatSeatString('N', '14', string_seatFormat);
          } else if (aisle === 'I' && seatNumber === '19') {
            newSeatText = FormatSeatString('N', '15', string_seatFormat);
          } else if (aisle === 'I' && seatNumber === '20') {
            newSeatText = FormatSeatString('N', '16', string_seatFormat);
          } else if (aisle === 'J' && seatNumber === '17') {
            newSeatText = FormatSeatString('N', '4', string_seatFormat);
          } else if (aisle === 'J' && seatNumber === '18') {
            newSeatText = FormatSeatString('N', '3', string_seatFormat);
          } else if (aisle === 'J' && seatNumber === '19') {
            newSeatText = FormatSeatString('N', '2', string_seatFormat);
          } else if (aisle === 'J' && seatNumber === '20') {
            newSeatText = FormatSeatString('N', '1', string_seatFormat);
          } else if (aisle === 'K' && seatNumber === '17') {
            newSeatText = FormatSeatString('O', '13', string_seatFormat);
          } else if (aisle === 'K' && seatNumber === '18') {
            newSeatText = FormatSeatString('O', '14', string_seatFormat);
          } else if (aisle === 'K' && seatNumber === '19') {
            newSeatText = FormatSeatString('O', '15', string_seatFormat);
          } else if (aisle === 'K' && seatNumber === '20') {
            newSeatText = FormatSeatString('O', '16', string_seatFormat);
          } else if (aisle === 'L' && seatNumber === '17') {
            newSeatText = FormatSeatString('O', '4', string_seatFormat);
          } else if (aisle === 'L' && seatNumber === '18') {
            newSeatText = FormatSeatString('O', '3', string_seatFormat);
          } else if (aisle === 'L' && seatNumber === '19') {
            newSeatText = FormatSeatString('O', '2', string_seatFormat);
          } else if (aisle === 'L' && seatNumber === '20') {
            newSeatText = FormatSeatString('O', '1', string_seatFormat);
          } else {
            // console.log("[TGHFFU] aisle = ", aisle, " , seatNumber = ", seatNumber);
          }

          if(newSeatText !== '') {
            seatTD.childNodes.forEach(function(node) {
              if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = node.textContent.replace(re_matchSeat, newSeatText);
              }
            });
          }
        }
      }
    } else if (venueDiv && venueDiv.textContent.includes(string_venue11)) {
      var nextTD = orderTicket.querySelector('.orderTicket > td:nth-child(2)');
      if (nextTD && nextTD.textContent.includes(string_area11)) {
        venueDiv.childNodes.forEach(function(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(string_venue11, string_venue5);
          }
        });
        nextTD.childNodes.forEach(function(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(string_area11, string_areaNa);
          }
        });
      }

      var seatTD = orderTicket.querySelector('.orderTicket > td:nth-child(3)');
      if (seatTD) {
        var seatText = seatTD.textContent.trim();
        var matches = seatText.match(re_matchSeat);
        if (matches && matches.length === 3) {
          var aisle = matches[1];
          var seatNumber = matches[2];
          var newSeatText = '';

          if (seatNumber === '19' || seatNumber === '20') {
            newSeatText = string_checkStaff;
          } else if (aisle === 'M' && seatNumber === '5') {
            newSeatText = string_checkStaff;
          } else if (aisle === 'M' && seatNumber === '6') {
            newSeatText = string_checkStaff;
          } else if (aisle === 'M' && seatNumber === '13') {
            newSeatText = string_checkStaff;
          } else {
            // console.log("[TGHFFU] aisle = ", aisle, " , seatNumber = ", seatNumber);
          }

          if(newSeatText !== '') {
            seatTD.childNodes.forEach(function(node) {
              if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = node.textContent.replace(re_matchSeat, newSeatText);
              }
            });
          }
        }
      }
    }
  });
}

parseOrderTicket();