if (Posts.find().count() === 0) { Posts.insert({    movement: 'Snatch',    description: 'Description 1'  });  Posts.insert({    movement: 'Clean & Jerk',    description: 'Description 2'});  Posts.insert({    movement: 'Double Under',    description: 'Description 3'}); }