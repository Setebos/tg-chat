  $(function() {
    refreshChat();
      
    $('#send').click(function() {
        var name = $('#name').val();
        var message = $('#message').val();
        $.post('chat.php', {
            'name': name,
            'message': "Ta gueule."
        }, refreshChat);
        $('#message').val('');
        $('#message').focus();
    });

    $('#message').keypress(function(e) {
      if(e.which == 13) {
        $('#send').trigger('click');
      }
    })

    function refreshChat() {
      $('#chat').load('log.html', function() {
        var d = $('#chat');
        d.scrollTop(d.prop("scrollHeight"));
      });
    }
      
    setInterval(refreshChat, 4000);
  });