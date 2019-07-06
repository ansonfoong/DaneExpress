class ForumCategory {
  private title: string;
  private categoryDescription: string;
  private forumSubcategories: Array<ForumSubCategory>;
}

class ForumSubCategory {
  private title: string;
  private topicDescription: string;
  private totalPosts: number;
  private recentPost: string;
  
  constructor(title: string, desc: string)
  {
    this.title = title;
    this.topicDescription = desc;
  }
}

export { ForumCategory, ForumSubCategory };