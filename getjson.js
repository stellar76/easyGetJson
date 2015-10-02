font_page = function() {
        loadJSON('http://www.religiouslibertyindex.org/api/corporations',
            function(data) {
                if (data == null) {
                    console.log('something is wrong man!);
                }
                //console.log(data);
                var d, i;
                for (i = 0; i < data.length; i++) {
                    d = data[i];
                    if (d.completedOn != null) {
                      document.getElementById('fplist').innerHTML += '<div class="col-md-3"><div class="card"><div class="corner-score"><div class="check-sc"></div><span>' + d.totalScore +
                      '</span>Scored a</div><a class="company-image" href="' + 'http://www.religiouslibertyindex.org/breakdown.html?surveycode=' + d.surveyCode + '"><img src="' + d.logo + '" /></a><span><a class="btn btn-primary btn-block" href="' + 'http://www.religiouslibertyindex.org/breakdown.html?surveycode=' + d.surveyCode + '">SEE A BREAKDOWN</a></span></div></div>';
                    }
                }
                //alert('loaded');
                $('#fplist').addClass('done');
                //document.getElementById('loading').style.display = 'none';
            },
            function(xhr) {
                console.error(xhr);
            }
        );
    }
