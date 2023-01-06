/* デモ用のストループ課題 */
/* 教示 */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p style='text-align:left;font-size:20pt'>これはテスト課題です。</p>"+
        "<p style='text-align:left;font-size:20pt'>２つ出てくる食べ物の画像うち好きな方をマウスでクリックして選択してください。</p>" +
        "<p style='text-align:left;font-size:20pt'>キーボードのキーをどれか押すと課題が始まります。準備ができたら始めてください。</p>",
    post_trial_gap: 1000
};

/*食べ物画像*/
var stimuli = [
  {image:['<div style="position: absolute; top: 30%; left: 20%"><img src="test_task1/stimuli/food1.png"width="400px"/></div>', '<div style="position: absolute; top: 30%; right: 20%"><img src="test_task1/stimuli/food2.png"width="400px"/></div>'] , data: {left: 'vongole', right: 'curry'}},
  {image:['<div style="position: absolute; top: 30%; left: 20%"><img src="test_task1/stimuli/food3.png"width="400px"/></div>', '<div style="position: absolute; top: 30%; right: 20%"><img src="test_task1/stimuli/food4.png"width="400px"/></div>'] , data: {left: 'ramen', right: 'shin-ramen'}},
  {image:['<div style="position: absolute; top: 30%; left: 20%"><img src="test_task1/stimuli/food5.png"width="400px"/></div>', '<div style="position: absolute; top: 30%; right: 20%"><img src="test_task1/stimuli/food6.png"width="400px"/></div>'] , data: {left: 'soba', right: 'yakisoba'}},
  {image:['<div style="position: absolute; top: 30%; left: 20%"><img src="test_task1/stimuli/food7.png"width="400px"/></div>', '<div style="position: absolute; top: 30%; right: 20%"><img src="test_task1/stimuli/food8.png"width="400px"/></div>'] , data: {left: 'sandwich', right: 'mapo-tofu'}},
]

/*選択課題*/
var select_food = {
    timeline: [{
      type: "html-button-response",
      stimulus: '',
      choices: jsPsych.timelineVariable('image'),
      button_html: '%choice%',
      response_ends_trial: true,
      data: jsPsych.timelineVariable('data'),
    }],
    timeline_variables: stimuli,
    sample: {type: 'fixed-repetitions',size: 1}
};

/*デブリーフィング*/
var debrief = {
    type: "html-keyboard-response",
    stimulus: "<p>キーボードのキーをどれか押すと，テスト課題が終わります。</p>",
    post_trial_gap: 1000
};

/*タイムラインの設定*/
var timeline = [fullscreen,instructions,select_food,debrief];
