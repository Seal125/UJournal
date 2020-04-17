const tags = require('../models/tags');

// an onclick function will place the entry_id and the specific tag that was clicked on in the req body
const add = (req,res) =>{
    const { tag,entry_id } = req.body
    tags.createTag(entry_id,tag)
}

// an onclick function will place the entry_id and the specific tag that was clicked on in the req body
const deleteTag = (req,res) =>{
    const { tag,entry_id } = req.body
    tags.deleteTagFromEntry(entry_id,tag)
}

// this function will be used for when a user searches a tag in the public entry space
const getAllForSearch = (req,res) => {
    const { tag } = req.body
    tags.getAllOfATag(tag)
}

const getTagsThatUserUses = (req,res) => {
    const { userId } = req.body
    tags.getAllUsersTags(userId)
} 

// this function will get all of the entries that include the tag
const getEntriesWithTag = (req,res) => {
    const { userId,tag } = req.body
    tags.getAllOfAUsersTag(userId,tag)
}

module.exports = {
    add,
    deleteTag,
    getAllForSearch,
    getTagsThatUserUses,
    getEntriesWithTag
}