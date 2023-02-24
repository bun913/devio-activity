import {z} from 'zod'

const authoreIDSchema = z
  .string()
  .regex(
    /^(?!https?:\/\/).*$/,
    'AUTHOR_IDは作者ページではなくURL末尾のID部分を設定してください'
  )

const ActionParamsSchema = z.object({
  authorID: authoreIDSchema,
  token: z.string(),
  sha: z.string()
})

export type ActionParams = z.infer<typeof ActionParamsSchema>
