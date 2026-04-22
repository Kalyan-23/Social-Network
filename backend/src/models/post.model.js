import mongoose, {Schema} from "mongoose"

const PollOptionSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    maxLength: [100, 'Post cannot exceed 100 characters'],
    default: '',
  },
  feeling: {
    type: String,
    maxLength: [50, 'Feeling cannot exceed 50 characters'],
  },
  image: {
    type: String,
  },
  backgroundColor: {
    type: String,
    default: 'bg-white'
  },
  poll: {
    options: [PollOptionSchema],
    endDate: Date,
    active: {
      type: Boolean,
      default: true
    }
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],

},{timestamps: true});

PostSchema.pre('validate', function(next) {
  const hasContent = Boolean(this.content && this.content.trim());
  const hasImage = Boolean(this.image);
  const hasPoll = Boolean(this.poll?.options?.length >= 2);

  if (!hasContent && !hasImage && !hasPoll) {
    this.invalidate('content', 'Post content, image, or poll is required');
  }

  next();
});

export const Post = mongoose.model('Post', PostSchema);
