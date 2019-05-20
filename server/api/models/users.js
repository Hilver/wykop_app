const bookshelf = require('../config/bookshelf')

const User = bookshelf.Model.extend({
    tableName: 'users_stats'
})

module.exports.create = user => {
	return new User({
		user_id: user.id,
        user_nickname: user.nickname,
        links_added_count: user.links_added_count,
        links_published_count: user.links_published_count,
        comments_added: user.comments_added,
        diggs: user.diggs,
        effectiveness: user.effectiveness,
        avg_daily_digg: user.avg_daily_digg,
        followers: user.followers,
        photoUrl: user.photoUrl
	}).save()
}
