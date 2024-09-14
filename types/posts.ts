export interface BlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    advanced_seo_description: string;
    jetpack_seo_html_title: string;
    jetpack_seo_noindex: boolean;
    _coblocks_attr: string;
    _coblocks_dimensions: string;
    _coblocks_responsive_height: string;
    _coblocks_accordion_ie_support: string;
    jetpack_post_was_ever_published: boolean;
    reader_suggested_tags: string;
    _jetpack_newsletter_access: string;
    _jetpack_dont_email_post_to_subs: boolean;
    _jetpack_newsletter_tier_id: number;
    _jetpack_memberships_contains_paywalled_content: boolean;
    _jetpack_memberships_contains_paid_content: boolean;
    footnotes: string;
    jetpack_publicize_message: string;
    jetpack_publicize_feature_enabled: boolean;
    jetpack_social_post_already_shared: boolean;
    jetpack_social_options: {
      image_generator_settings: {
        template: string;
        enabled: boolean;
      };
      version: number;
    };
  };
  categories: number[];
  tags: string[];
  class_list: string[];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: string[];
  jetpack_shortlink: string;
  jetpack_sharing_enabled: boolean;
  jetpack_likes_enabled: boolean | null;
  jetpack_related_posts: string[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
    "version-history": Array<{ count: number; href: string }>;
    "predecessor-version"?: Array<{ id: number; href: string }>;
    "wp:featuredmedia"?: Array<{ embeddable: boolean; href: string }>;
    "wp:attachment": Array<{ href: string }>;
    "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}
